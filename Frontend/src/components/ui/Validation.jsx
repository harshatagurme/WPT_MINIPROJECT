const Validation = (values) => {
    let errors = {}

    if (!values.username) {
        errors.username = "Name required"
    }
    else if (values.username.length <3) {
        errors.username = "Name must be more than 2 char"
    }
    if (!values.email) {
        errors.email= "email required"
    }
    else if (values.email.length==='') {
        errors.email = "email must contain @"
    }
    if (!values.password) {
        errors.password= "password required"
    }
    else if (values.password.length < 5) {
        errors.password = "password must be more than 5 char"
    }
    return errors;
}
export default Validation;