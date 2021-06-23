export const addJobToFavsAction = job => ({
    type: "ADD_JOB_TO_FAVS",
    payload: job
})

export const removeJobFromFavsAction = job => ({
    type: "REMOVE_JOB_FROM_FAVS",
    payload: job
})
