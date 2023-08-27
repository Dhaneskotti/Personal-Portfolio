function Validations(formData) {
    const errors = {}

    if (!formData.name.trim()) {
        errors.name = "Name is Required"
    }
    if (!formData.email.trim()) {
        errors.email = "Email is Required"
    }
    if (!formData.subject.trim()) {
        errors.subject = "Subject is Required"
    }
    if (!formData.msg.trim()) {
        errors.msg = "Message is Required"
    }

    return errors;

}

export default Validations;