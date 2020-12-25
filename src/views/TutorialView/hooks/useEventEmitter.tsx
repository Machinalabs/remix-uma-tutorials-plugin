import React, { PropsWithChildren, useContext, useState } from "react"

interface Transaction {
  // TODO
  txHash: string
}

type EventsType =
  | "onCollateralDeployed"
  | "onPriceIdentifierDeployed"
  | "onExpiringMultiPartyDeployed"
  | "onNewPositionCreated"
  | "onReedemedToken"
  | "onNewDeposit"
  | "onNewWithdraw"

type EventData = Transaction

type CallbackFunctionType = (data: EventData) => void

interface IEventEmitterProvider {
  subscribe: (topic: EventsType, callback: CallbackFunctionType) => void
  emit: (topic: EventsType, data: EventData) => void
}

/* tslint:disable */
const EventContext = React.createContext<IEventEmitterProvider>({
  subscribe: (topic: EventsType, callback: CallbackFunctionType) => {},
  emit: (topic: EventsType, data: EventData) => {},
})
/* tslint:enable */

export type Subscription = (val: EventData) => void

export const EventProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [subscriptionsMap, setSubscriptionMap] = useState(
    new Map<EventsType, Set<Subscription>>()
  )

  const subscribe = (topic: EventsType, callback: Subscription) => {
    const subscriptionSet = subscriptionsMap.get(topic)
    if (subscriptionSet) {
      setSubscriptionMap(
        new Map(subscriptionsMap.set(topic, subscriptionSet.add(callback)))
      )
    } else {
      const newSet = new Set<Subscription>().add(callback)
      setSubscriptionMap(new Map(subscriptionsMap.set(topic, newSet)))
    }
  }

  const emit = (topic: EventsType, val: EventData) => {
    const subscriptions = subscriptionsMap.get(topic)
    if (subscriptions) {
      for (const subscription of subscriptions) {
        subscription(val)
      }
    }
  }

  return (
    <EventContext.Provider
      value={{
        subscribe,
        emit,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export const useEventEmitter = () => {
  const context = useContext(EventContext)

  if (context === null) {
    throw new Error(
      "useEvent() can only be used inside of <EventProvider />, please declare it at a higher level"
    )
  }
  return context
}
