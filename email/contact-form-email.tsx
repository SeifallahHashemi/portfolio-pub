import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    massage: string;
    email: string;
}
const ContactFormEmail = ({ massage, email }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Massage From Portfolio</Preview>
            <Tailwind>
                <Body className={"bg-gray-100 text-black"}>
                    <Container>
                        <Section className={"bg-white borderBlack my-10 px-10 py-4 rounded-md"}>
                            <Heading className={"leading-tight"}>Received the massage from the contact form</Heading>
                            <Text>{massage}</Text>
                            <Hr />
                            <Text>Email come from: {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;