import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";
import { CSSProperties } from "react";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail = ({
  name,
  email,
  message,
}: ContactNotificationEmailProps) => {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');
        `}</style>
      </Head>

      <Preview>New portfolio message from {name}</Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={badge}>PORTFOLIO CONTACT</Text>

            <Heading style={title}>
              New Message<span style={accent}></span>
            </Heading>
          </Section>

          <Hr style={divider} />

          {/* Sender */}
          <Section style={section}>
            <Text style={label}>FROM</Text>

            <Text style={nameText}>{name}</Text>

            <Link href={`mailto:${email}`} style={emailLink}>
              {email}
            </Link>
          </Section>

          {/* Message */}
          <Section style={section}>
            <Text style={label}>MESSAGE</Text>

            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Reply */}
          <Section style={cta}>
            <Link
              href={`mailto:${email}?subject=Re: Portfolio Contact`}
              style={button}
            >
              Reply to {name}
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Portfolio Contact System
            </Text>

            <Text style={footerSub}>
              © 2026 Kevin Truong
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main: CSSProperties = {
  backgroundColor: "#f1f5f9",
  padding: "40px 16px",
  fontFamily: "'Nunito Sans', Arial, sans-serif",
};

const container: CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
};

const header: CSSProperties = {
  padding: "36px 40px 20px",
  textAlign: "center",
};

const badge: CSSProperties = {
  fontSize: "11px",
  letterSpacing: "2px",
  fontWeight: 700,
  color: "#6366f1",
  marginBottom: "8px",
};

const title: CSSProperties = {
  fontSize: "30px",
  fontWeight: 800,
  color: "#0f172a",
  margin: "0",
};

const accent: CSSProperties = {
  color: "#6366f1",
};

const divider: CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const section: CSSProperties = {
  padding: "28px 40px",
};

const label: CSSProperties = {
  fontSize: "12px",
  fontWeight: 700,
  color: "#6366f1",
  letterSpacing: "1.5px",
  marginBottom: "12px",
};

const nameText: CSSProperties = {
  fontSize: "22px",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "6px",
};

const emailLink: CSSProperties = {
  fontSize: "15px",
  color: "#6366f1",
  textDecoration: "none",
  fontWeight: 600,
};

const messageBox: CSSProperties = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "18px 20px",
};

const messageText: CSSProperties = {
  fontSize: "15px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const cta: CSSProperties = {
  padding: "0 40px 32px",
  textAlign: "center",
};

const button: CSSProperties = {
  backgroundColor: "#6366f1",
  color: "#ffffff",
  padding: "14px 28px",
  fontSize: "14px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "6px",
  display: "inline-block",
};

const footer: CSSProperties = {
  padding: "24px 40px 32px",
  textAlign: "center",
};

const footerText: CSSProperties = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 4px",
};

const footerSub: CSSProperties = {
  fontSize: "11px",
  color: "#9ca3af",
  margin: "0",
};