import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume | Truong Tan Dung",
	description: "View and download Truong Tan Dung's resume.",
};

export default function ResumeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
