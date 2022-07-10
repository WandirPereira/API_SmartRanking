import { JogadoresService } from './jogadores.service';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresServices: JogadoresService) {}

  @Post()
  async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto) {
    await this.jogadoresServices.criarAtualizarJogador(criaJogadorDto);
  }

  @Get()
  async consultarJogadores(
    @Query('email') email: string,
  ): Promise<Jogador[] | Jogador> {
    if (email) {
      return await this.jogadoresServices.consultarJogadoresPeloEmail(email);
    } else {
      return await this.jogadoresServices.consultarTodosJogadores();
    }
  }
  @Delete()
  async deletarJogador(@Query('email') email: string): Promise<void> {
    this.jogadoresServices.deletarJogador(email);
  }
}
