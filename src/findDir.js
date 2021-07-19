export const Finddir = (options) => {
    var temp = ""
    switch (options.template) {
        case "A fullstack app with react and express along with mongodb":
            temp = "fullstackmongodb"
        case "A clean react app with classes":
            temp = "classes"
            break
        case "A react app with hooks and redux without synchronous actions":
            temp = "hooksandredux"
            break
        case "A simple express api":
            temp = "simplerestapi"
            break
        case "A simple app with express and routers":
            temp = "apiwithrouters"
            break
        case "An app with middlewares and routers":
            temp = "apiwithmiddleware"
            break
        case "A React app with hooks and routers":
            temp = "hooks"
            break
        case "A react app with redux thunk and synchronous actions and routers":
            temp = "reduxthunk"
            break
        case "A react app with redux thuk and persisited store":
            temp = "reactpersist"
            break
        default:
            break
    }
    return temp
}