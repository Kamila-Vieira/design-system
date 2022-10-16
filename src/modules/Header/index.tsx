import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text";

export function Header() {
  return (
    <header className="flex flex-col items-center">
      <Logo />

      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>

      <Text size="lg" className="text-gray-400 mt-1">
        Faça login e comece a usar!
      </Text>
    </header>
  );
}
