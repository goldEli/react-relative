import { useEffect, useState, useSyncExternalStore } from "react"

function createStore(createState) {
    // global state
    let state
    const listeners = new Set()

    const setState = (partial) => {
        const nextState = partial(state)
        const prevState = { ...state }

        state = { ...state, ...nextState }

        listeners.forEach(listener => listener(state, prevState))
    }

    const subscribe = (listener) => {
        listeners.add(listener)
        return function unsubscribe() {
            listeners.delete(listener)
        }
    }

    const destroy = () => {
        listeners.clear()
    }


    const getState = () => state

    const api = { getState, destroy, subscribe, setState }

    state = createState(setState, getState, api)

    return api

}

function useStore(api, selector=state => state) {
    // const [, forceRender] = useState(0)

    // useEffect(() => {
    //     const unsubscribe = api.subscribe((state, prevState) => {
    //         // compare newState and oldState, if they are not equal, forceRender, otherwise do nothing
    //         const newObj = selector(state)
    //         const oldObj = selector(prevState)
    //         if (newObj !== oldObj) {
    //             forceRender(Math.random()) // forceRender
    //         }
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])
    useSyncExternalStore(api.subscribe, api.getState)

    return selector(api.getState())
}

export const create = (createState) => {
    const api = createStore(createState)

    /**
     *  useXXXStore(state => state.xxx)
     */
    const useBoundStore = (selector) => useStore(api, selector)

    Object.assign(useBoundStore, api)

    return useBoundStore

}
