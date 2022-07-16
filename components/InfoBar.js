import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

export default function InfoBar() {
  const showInfo = useCallback(() => {
    alert(
      `Welcome to the Dbux-PDG Gallery! Explanations:\n` +
      `1. This page ONLY hosts the gallery with visual results of running Dbux-PDG on a diverse set of algorithms from the javascript-algorithms repository.\n` +
      `2. If you want to try out Dbux-PDG, please follow the instructions at: https://domiii.github.io/dbux/pdg\n` +
      `3. Feel free to reach out to us directly (e.g. on Discord) in case of any questions, concerns or feedback.`
    );
  }, []);
  return (<>
    {/* Info button. */}
    <button className="btn btn-primary font-08 py-0" onClick={showInfo}>?</button>

    {/* Discord button */}
    <Link href="https://discord.gg/QKgq9ZE">
      <a title="Join us on Discord">
        <Image
          width="79"
          height="20"
          src="https://img.shields.io/discord/743765518116454432.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2"
          alt="discord" />
      </a>
    </Link>
  </>);
}
