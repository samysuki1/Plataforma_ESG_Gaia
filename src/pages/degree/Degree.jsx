import { DEGREE_CONFIG } from "./Degree.config";
import * as S from "./Degree.styles";

export function Degree() {
  return (
    <S.Wrapper>
      <S.Title>{DEGREE_CONFIG.TITLE}</S.Title>
      <S.Content>
        <S.Paragraph>
          <span>Objetivos:</span> {DEGREE_CONFIG.DATA.INSTITUTION}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Cadastro de Boas Práticas</span> {DEGREE_CONFIG.DATA.COURSE}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Pontuação e Ranqueamento</span> {DEGREE_CONFIG.DATA.DURATION}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Bonificação e Reconhecimento</span> {DEGREE_CONFIG.DATA.START}
        </S.Paragraph>
      </S.Content>
    </S.Wrapper>
  );
}
