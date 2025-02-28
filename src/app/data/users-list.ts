import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
  {
    nome: "Harry Potter",
    email: "harry.potter@hogwarts.com",
    senha: "ExpectoPatronum123",
    idade: 24,
    endereco: {
      rua: "Godric's Hollow",
      numero: 7,
      cidade: "Londres",
      estado: "Inglaterra",
      pais: "Reino Unido"
    },
    telefone: "+44 7911 123456", //(Reino Unido, telemóvel),
    ativo: true,
    funcao: "Auror",
    dataCadastro: "2020-06-01T14:30:00Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-02-25T10:45:00Z"
    }
  },
  {
    nome: "Hermione Granger",
    email: "hermione.granger@hogwarts.com",
    senha: "Leviosa987",
    idade: 24,
    endereco: {
      rua: "Rua dos Trouxas",
      numero: 45,
      cidade: "Londres",
      estado: "Inglaterra",
      pais: "Reino Unido"
    },
    telefone: "+35 912 345 678", //(Portugal, telemóvel)
    ativo: true,
    funcao: "Ministra da Magia",
    dataCadastro: "2019-09-15T09:00:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-02-24T22:10:00Z"
    }
  },
  {
    nome: "Ron Weasley",
    email: "ron.weasley@hogwarts.com",
    senha: "ChaveDePortal123",
    idade: 24,
    endereco: {
      rua: "A Toca",
      numero: 1,
      cidade: "Ottery St. Catchpole",
      estado: "Devon",
      pais: "Reino Unido"
    },
    telefone: "+12 (555) 123-4567", //(EUA/Canadá)
    ativo: true,
    funcao: "Jogador de Quadribol",
    dataCadastro: "2021-01-10T16:20:00Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2025-02-25T08:30:00Z"
    }
  },
  {
    nome: "Draco Malfoy",
    email: "draco.malfoy@hogwarts.com",
    senha: "Sonserina123",
    idade: 24,
    endereco: {
      rua: "Mansão Malfoy",
      numero: 99,
      cidade: "Wiltshire",
      estado: "Inglaterra",
      pais: "Reino Unido"
    },
    telefone: "+55 (11) 98765-4321", // Brasil, telemóvel
    ativo: true,
    funcao: "",
    dataCadastro: "2022-05-22T11:15:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2025-02-23T14:50:00Z"
    }
  },
  {
    nome: "Albus Dumbledore",
    email: "albus.dumbledore@hogwarts.com",
    senha: "FenixEterna",
    idade: 150,
    endereco: {
      rua: "Escola de Magia e Bruxaria de Hogwarts",
      numero: 1,
      cidade: "Hogsmeade",
      estado: "Escócia",
      pais: "Reino Unido"
    },
    telefone: "+33 1 23 45 67 89", // França, fixo
    ativo: false,
    funcao: "Diretor de Hogwarts",
    dataCadastro: "2015-12-01T08:45:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2020-06-30T21:00:00Z"
    }
  },
  {
    nome: "Lord Voldemort",
    email: "",
    senha: "AvadaKedavra",
    idade: 71,
    endereco: {
      rua: "Esconderijo das Trevas",
      numero: 0,
      cidade: "",
      estado: "",
      pais: "Reino Unido"
    },
    telefone: "N/A",
    ativo: false,
    funcao: "Lorde das Trevas",
    dataCadastro: "1945-06-01T00:00:00Z",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: "1998-05-02T23:59:59Z"
    }
  },
  {
    nome: "Dobby",
    email: "dobby.elfo@hogwarts.com",
    senha: "MeiaLivre123",
    idade: 37,
    endereco: {
      rua: "Casa dos Elfos",
      numero: 7,
      cidade: "Hogsmeade",
      estado: "Escócia",
      pais: "Reino Unido"
    },
    telefone: "+49 30 12345678", // Alemanha, Berlim
    ativo: true,
    funcao: "Elfo Livre",
    dataCadastro: "1993-12-25T00:00:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "1998-03-15T12:00:00Z"
    }
  },
  {
    nome: "Sirius Black",
    email: "sirius.black@hogwarts.com",
    senha: "Animagus123",
    idade: 36,
    endereco: {
      rua: "Grimmauld Place",
      numero: 12,
      cidade: "Londres",
      estado: "Inglaterra",
      pais: "Reino Unido"
    },
    telefone: "+86 138 1234 5678", // China, telemóvel
    ativo: true,
    funcao: "Membro da Ordem da Fênix",
    dataCadastro: "1995-07-20T15:45:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "1996-06-18T22:00:00Z"
    }
  },
  {
    nome: "Luna Lovegood",
    email: "luna.lovegood@hogwarts.com",
    senha: "NargleHunter42",
    idade: 23,
    endereco: {
      rua: "Torre de Ravenclaw",
      numero: 42,
      cidade: "Ottery St. Catchpole",
      estado: "Devon",
      pais: "Reino Unido"
    },
    telefone: "+61 2 9876 5432", // Austrália, Sydney
    ativo: true,
    funcao: "Naturalista Mágica",
    dataCadastro: "2020-02-13T11:30:00Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2025-02-20T18:15:00Z"
    }
  },
  {
    nome: "Severus Snape",
    email: "severus.snape@hogwarts.com",
    senha: "AlwaysLily77",
    idade: 38,
    endereco: {
      rua: "Spinner's End",
      numero: 13,
      cidade: "Cokeworth",
      estado: "Inglaterra",
      pais: "Reino Unido"
    },
    telefone: "+07 495 123 4567", // Rússia, Moscou
    ativo: false,
    funcao: "Mestre de Poções",
    dataCadastro: "1981-11-01T23:59:59Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "1998-05-02T03:30:00Z"
    }
  }
];  