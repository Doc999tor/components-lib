const config = window._config

const initialState = {
    urlParams: {},
    step: {},
    choosingServices: {
        services: {
            name: '',
            duration: null,
            price: null,
            color: '',
            category_id: 0
        },
        servicesSearch: '',
        servicesListFilter: [],
        selectedServices: [],
        servicesList: [],
        addServices: [],
        editServices: {}
    },
    CategoriesServices: {
        categoryList: [],
        servicesBi: []
    },
    addProcedureView: "all-category"
}

export default function componentsReducers(state = initialState, action) {
    if (action.type === 'UPDATE_NEW_PROCEDURE') {
        return {
            ...state,
            ...state.choosingServices.services = {
                ...state.choosingServices.services,
                ...action.value
            }
        }
    } else if (action.type === 'UPDATE_PROCEDURES_LIST') {
        return {
            ...state,
            choosingServices: {
                ...state.choosingServices,
                servicesList: action.services
            }
        }
    } else if (action.type === 'SELECTED_PROCEDURES_LIST') {
        return {
            ...state,
            choosingServices: {
                ...state.choosingServices,
                selectedServices: action.services
            }
        }
    } else if (action.type === 'CLEAN_PROCEDURES') {
        return {
            ...state,
            choosingServices: {
                ...state.choosingServices,
                addServices: action.services
            }
        }
    } else if (action.type === 'UPDATE_SEARCH_VALUE') {
        return {
            ...state,
            urlParams: {
                ...state.urlParams,
                q: action.value
            }
        }
    } else if (action.type === 'UPDATE_PROCEDURES_LIST_FILTER') {
        return {
            ...state,
            choosingServices: {
                ...state.choosingServices,
                servicesListFilter: action.value
            }
        }
    } else if (action.type === 'CHANGE_ADD_PROCEDURE_VIEW') {
        return {
            ...state,
            addProcedureView: action.value
        }
    } else if (action.type === 'EDIT_SERVICE_PROCEDURES') {
        return {
            ...state,
            ...state.choosingServices.editServices = action.value
        }
    } else if (action.type === 'UPDATE_EDITING_SERVICE') {
        return {
            ...state,
            ...state.choosingServices.editServices = {
                ...state.choosingServices.editServices,
                ...action.value
            }
        }
    } else if (action.type === 'UPDATE_CATEGORY_EDITING') {
        return {
          ...state,
          ...state.choosingServices.editServices.category = action.value
        }
    } else if (action.type === 'REMOVE_CATEGORY_EDITING') {
        return {
          ...state,
          ...state.choosingServices.editServices = {}
        }
    }
    return state
}
