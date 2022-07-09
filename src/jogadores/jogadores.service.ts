import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { toUSVString } from 'util';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto) {
    await this.criar(criaJogadorDto);
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = criaJogadorDto;
    const jogador: Jogador = {
      _id: randomUUID(),
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }
}
