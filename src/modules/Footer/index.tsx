import { Text } from "../../components/Text";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text
        asChild
        size="sm"
        className="underline text-gray-400 hover:text-gray-200 transition-colors"
      >
        <a href="">Esqueceu sua senha?</a>
      </Text>
      <Text
        asChild
        size="sm"
        className="underline text-gray-400 hover:text-gray-200 transition-colors"
      >
        <a href="">Não possui conta? Crie uma agora!</a>
      </Text>
    </footer>
  );
}
