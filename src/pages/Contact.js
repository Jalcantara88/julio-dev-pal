import PageHeader from "../components/PageHeaderComp";
import ContactForm from "../components/contactFormComp";

const Contact = () => {
    return(
        <>
            <PageHeader
                title='Contact'
                subtitle="Feel free to reach out to me"
            />
            <ContactForm/>
        </>
    )
}

export default Contact;