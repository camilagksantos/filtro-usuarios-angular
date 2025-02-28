import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    // Adicionando log para depuração
    console.log('PhonePipe recebeu:', phone, typeof phone);
    
    // Se o valor for "N/A", retorna ele mesmo sem formatação
    if (phone === 'N/A') {
      return '-';
    }
    
    // Se não for uma string ou estiver vazio, retornar vazio
    if (!phone) {
      return '-';
    }
    
    try {
      // Convertendo explicitamente para string caso não seja
      const phoneStr = String(phone);
      
      // Remove qualquer caractere não numérico, exceto o símbolo '+'
      let cleanedPhone = phoneStr.replace(/[^\d+]/g, '');
      console.log('Telefone limpo:', cleanedPhone);
      
      // Verifica se começa com código de país (+)
      if (cleanedPhone.startsWith('+')) {
        // Extrai o código do país
        const countryCodeMatch = cleanedPhone.match(/^\+(\d{1,2})/);
        
        if (!countryCodeMatch) {
          return phoneStr; // Retorna original se não conseguir extrair o código
        }
        
        const countryCodeDigits = countryCodeMatch[1];
        const countryCode = '+' + countryCodeDigits;
        console.log('Código do país:', countryCode);
        
        // Remove o código do país para formatar o restante
        const restOfNumber = cleanedPhone.substring(countryCode.length);
        console.log('Resto do número:', restOfNumber);
        
        // Formata baseado no tamanho (fixo vs. telemóvel)
        if (restOfNumber.length < 10) {
          // Formato para telefones fixos (números menores que 10 dígitos)
          if (restOfNumber.length <= 6) {
            return `${countryCode} ${restOfNumber}`;
          } else {
            // Divide em blocos de 3-3-resto
            const formatted = `${countryCode} ${restOfNumber.substring(0, 3)} ${restOfNumber.substring(3, 6)} ${restOfNumber.substring(6)}`.trim();
            console.log('Formatado (fixo):', formatted);
            return formatted;
          }
        } else {
          // Formato para telemóveis (números com 10 ou mais dígitos)
          let formatted = '';
          if (restOfNumber.length === 10) {
            // Formato comum internacional (XXX) XXX-XXXX
            formatted = `${countryCode} (${restOfNumber.substring(0, 3)}) ${restOfNumber.substring(3, 6)}-${restOfNumber.substring(6)}`;
          } else if (restOfNumber.length === 9) {
            // Formato comum em Portugal e outros países
            formatted = `${countryCode} ${restOfNumber.substring(0, 3)} ${restOfNumber.substring(3, 6)} ${restOfNumber.substring(6)}`;
          } else {
            // Para números maiores, segmentamos em blocos de 3-3-3-resto
            formatted = countryCode;
            let remaining = restOfNumber;
            
            while (remaining.length > 0) {
              const chunk = remaining.substring(0, Math.min(3, remaining.length));
              formatted += ' ' + chunk;
              remaining = remaining.substring(chunk.length);
            }
          }
          console.log('Formatado (móvel):', formatted);
          return formatted;
        }
      } else {
        // Para números sem código de país
        if (cleanedPhone.length < 10) {
          // Formato para telefones fixos
          if (cleanedPhone.length <= 6) {
            return cleanedPhone;
          } else {
            // Divide em blocos de 3-resto
            return `${cleanedPhone.substring(0, 3)} ${cleanedPhone.substring(3)}`;
          }
        } else {
          // Formato para telemóveis
          let formatted = '';
          if (cleanedPhone.length === 10) {
            // Formato padrão (XXX) XXX-XXXX
            formatted = `(${cleanedPhone.substring(0, 3)}) ${cleanedPhone.substring(3, 6)}-${cleanedPhone.substring(6)}`;
          } else if (cleanedPhone.length === 11) {
            // Formato brasileiro (XX) XXXXX-XXXX
            formatted = `(${cleanedPhone.substring(0, 2)}) ${cleanedPhone.substring(2, 7)}-${cleanedPhone.substring(7)}`;
          } else {
            // Para outros tamanhos, segmentamos em blocos de 3
            formatted = '';
            let remaining = cleanedPhone;
            
            while (remaining.length > 0) {
              if (formatted === '') {
                // Primeiro bloco pode ter tamanho variável para DDD/código de área
                const chunkSize = remaining.length > 10 ? 2 : 3;
                const chunk = remaining.substring(0, chunkSize);
                formatted = `(${chunk})`;
                remaining = remaining.substring(chunk.length);
              } else {
                const chunk = remaining.substring(0, Math.min(4, remaining.length));
                formatted += ' ' + chunk;
                remaining = remaining.substring(chunk.length);
              }
            }
          }
          console.log('Formatado (sem código país):', formatted);
          return formatted;
        }
      }
      
      // Fallback
      return phoneStr;
    } catch (error) {
      console.error('Erro ao formatar telefone:', error);
      return phone || '-';
    }
  }
}