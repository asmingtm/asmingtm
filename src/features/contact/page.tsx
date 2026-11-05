import { PageHeader } from "@components";
import { ContactBlock } from "./components/ContactBlock";
export function ContactPage() {
    return (
        <main className="page-contact">
            <PageHeader title="Contact me" />
            <ContactBlock />
        </main>
    );
}