import ResultadoParseo from "./types/ResultadoParseo";
export default class Visitante {
    private static userAgent;
    private static validacionesNavegador;
    private static validacionesSistemaOperativo;
    private static validacionesPlataforma;
    private static parse;
    static navegador(userAgent?: string): ResultadoParseo;
    static sistemaOperativo(userAgent?: string): ResultadoParseo;
    static plataforma(userAgent?: string): string[];
    static get acronimoSistema(): string;
    static get acronimoNavegador(): string;
    static get acronimoPlataforma(): string;
}
