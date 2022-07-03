import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

export default function InfoBar() {
  const showInfo = useCallback(() => {
    alert(
      //`Three important things:\n\n` +
      `1. This page ONLY hosts the gallery with visual results of running Dbux-PDG on a diverset of algorithms from the javascript-algorithms repository.\n\n` +
      `2. If you want to try it yourself, please be patient, as we are still preparing deployment of the latest version of Dbux and documentation for Dbux-PDG.\n\n` +
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
