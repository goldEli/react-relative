import { useEffect, useState } from "react"

function createStore(createState) {
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

function useStore(api, selector) {
    const [, forceRender] = useState(0)

    useEffect(() => {
        api.subscribe((state, prevState) => {
            const newObj = selector(state)
            const oldObj = selector(prevState)
            if (newObj !== oldObj) {
                forceRender(Math.random()) // forceRender
            }
        })
    }, [])

    return selector(api.getState())
}

export const create = (createState) => {
    const api = createStore(createState)

    const useBoundStore = (selector) => useStore(api, selector)

    Object.assign(useBoundStore, api)

    return useBoundStore

}
