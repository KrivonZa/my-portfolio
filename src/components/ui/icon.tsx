"use client";
import GithubIcon from "../../../public/icon/github.svg";
import LinkedinIcon from "../../../public/icon/linkedin.svg";
import EmailIcon from "../../../public/icon/email.svg";

export const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
};

export default function Icon({ name, className }) {
  const Svg = icons[name];
  return <Svg className={className} />;
}