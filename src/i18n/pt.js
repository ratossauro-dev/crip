const pt = {
    nav: { home: 'Início', about: 'Sobre', faq: 'FAQ', support: 'Suporte' },
    hero: {
        title_1: 'Exchange de',
        title_2: 'Criptomoedas',
        title_3: 'Relâmpago',
        subtitle: 'Troque criptomoedas com as melhores taxas sem necessidade de cadastro. Rápido, seguro e totalmente automatizado.',
        stat_currencies: 'Moedas', stat_automatic: 'Automático', stat_support: 'Suporte'
    },
    widget: {
        send: 'Você Envia', receive: 'Você Recebe',
        fixed_rate: 'Taxa Fixa', float_rate: 'Taxa Flutuante',
        dest_addr: 'Endereço de Destino', placeholder_addr: 'Digite seu endereço {coin}',
        exchange_rate: 'Taxa de Câmbio', network_fee: 'Taxa de Rede', included: 'inclusa',
        exchange_now: 'Trocar Agora', enter_address: 'Digite o endereço da carteira',
        min_time: '~2-15 min', valid_addr_error: 'Endereço parece muito curto',
        ai_btn: 'Análise de Mercado IA', ai_analyzing: 'Analisando...'
    },
    features: {
        title: 'Por que escolher', subtitle: 'Uma plataforma de exchange confiável construída para velocidade, privacidade e as melhores taxas.',
        f1_title: 'Segurança Total', f1_desc: 'Serviço não-custodial. Nunca armazenamos suas chaves privadas ou fundos. Cada transação é processada em tempo real.',
        f2_title: 'Menores Taxas', f2_desc: 'Nossa taxa fixa é de apenas 1%, e a flutuante apenas 0,5%. Sem cobranças ocultas, nunca.',
        f3_title: 'Velocidade Relâmpago', f3_desc: 'A maioria das trocas é concluída em menos de 15 minutos. Nosso sistema automatizado processa swaps 24/7.'
    },
    faq: {
        title: 'Perguntas Frequentes', subtitle: 'Tem dúvidas? Temos respostas.',
        q1_q: 'Como faço uma troca?', q1_a: 'Selecione as moedas, insira o valor e o endereço da sua carteira de destino, depois clique em Trocar Agora. Você receberá um endereço de depósito — envie o valor exato e receba suas moedas.',
        q2_q: 'Por que posso confiar nesta plataforma?', q2_a: 'Somos uma exchange não-custodial. Nunca retemos seus fundos. O processo de swap é totalmente automatizado — assim que a blockchain confirma seu depósito, a troca é processada instantaneamente.',
        q3_q: 'Existem taxas ocultas?', q3_a: 'Não. A cotação exibida no momento da troca já inclui todas as taxas. Você envia exatamente a quantidade de cripto mostrada e recebe exatamente o valor solicitado.',
        q4_q: 'Qual o valor mínimo por transação?', q4_a: 'O valor mínimo varia por criptomoeda mas é geralmente muito baixo. Verifique o widget de swap para os mínimos exatos de cada par.',
        q5_q: 'Quanto tempo leva uma troca?', q5_a: 'A maioria dos swaps é concluída em 2-15 minutos, dependendo da criptomoeda e do congestionamento da blockchain. Redes mais rápidas como Solana ou TRON são quase instantâneas.',
        q6_q: 'Quais criptomoedas são suportadas?', q6_a: 'Suportamos 20+ criptomoedas incluindo BTC, ETH, USDT, USDC, BNB, SOL, XMR, DOGE, TRX, MATIC, SHIB, TON, XLM e mais em múltiplas redes.'
    },
    order: {
        sent: 'Você Envia', received: 'Você Recebe', order_id: 'ID do Pedido', time_remaining: 'Tempo Restante',
        order_type: 'Tipo do Pedido', creation_time: 'Criado Em',
        send_instruction: 'Envie exatamente {amount} {coin} para o endereço abaixo',
        copied: 'Copiado!', attention: 'Importante:', attention_desc: 'Envie o valor exato exibido. Enviar um valor diferente pode causar atrasos.',
        receiving_wallet: 'Sua Carteira {coin} de Recebimento', need_to_know: 'O que você precisa saber',
        info_1: 'Sua transação requer {confirmations} confirmações na blockchain da rede {network} antes do processamento.',
        info_2: 'Envie apenas {coin} para este endereço. Enviar outros tokens resultará em perda permanente.',
        info_3: 'A taxa de câmbio está travada durante a contagem regressiva.',
        notifications: 'Notificações por Email', email_desc: 'Receba notificações quando o status do pedido mudar.',
        email_placeholder: 'seu@email.com', confirm: 'Assinar', email_success: 'Você será notificado sobre atualizações.',
        step_1: 'Aguardando Depósito', step_2: 'Confirmando', step_3: 'Trocando', step_4: 'Enviando'
    },
    support: {
        title: 'Central de Suporte', subtitle: 'Preencha o formulário abaixo para relatar problemas ou tirar dúvidas.',
        label_name: 'Seu Nome', label_email: 'Seu Email', label_phone: 'Telefone', label_desc: 'Descrição', label_file: 'Anexo (Opcional)',
        placeholder_name: 'João Silva', placeholder_email: 'joao@exemplo.com', placeholder_phone: '+55 11 99999-0000',
        placeholder_desc: 'Descreva seu problema detalhadamente...',
        upload_hint: 'Clique para upload ou arraste o arquivo', submit: 'Enviar Solicitação', sending: 'Enviando...',
        success_title: 'Mensagem recebida!', success_desc: 'Nossa equipe de suporte analisará sua solicitação e entrará em contato em breve.',
        send_another: 'Enviar Nova Mensagem'
    },
    about: {
        title: 'Sobre Nós',
        general_title: 'Quem Somos', general_desc: 'Somos uma plataforma de exchange de criptomoedas não-custodial dedicada a fornecer serviços de trading rápidos, seguros e privados. Nosso sistema automatizado processa milhares de transações diariamente.',
        card_1_title: 'Nossa Missão', card_1_desc: 'Tornar a troca de criptomoedas acessível, rápida e segura para todos ao redor do mundo.',
        card_2_title: 'Nossa Tecnologia', card_2_desc: 'Construído com infraestrutura de ponta com feeds de preços em tempo real e suporte multi-blockchain.',
        values_title: 'Nossos Valores',
        val_1_title: 'Privacidade em Primeiro', val_1_desc: 'Sem cadastro, sem KYC para trocas padrão. Sua privacidade é nossa prioridade.',
        val_2_title: 'Velocidade & Confiabilidade', val_2_desc: 'Processamento automatizado 24/7 garante que suas trocas sejam executadas sem atrasos.'
    },
    legal: {
        title: 'Legal', subtitle: 'Documentação legal',
        terms: 'Termos de Serviço', privacy: 'Política de Privacidade', risk: 'Aviso de Riscos',
        terms_content: '<h4>1. Aceitação dos Termos</h4><p>Ao usar nossos serviços, você aceita estes termos. Você deve ter pelo menos 18 anos.</p><h4>2. Não-Custodial</h4><p>Não armazenamos seus fundos ou chaves privadas. A troca é totalmente automatizada.</p><h4>3. Limitação de Responsabilidade</h4><p>Não somos responsáveis por perdas causadas por falhas na rede blockchain, endereços incorretos ou volatilidade do mercado.</p>',
        privacy_content: '<h4>1. Coleta de Dados</h4><p>Não exigimos cadastro. Coletamos dados mínimos de transação apenas para prestação do serviço.</p><h4>2. Cookies</h4><p>Usamos cookies apenas para preferências de idioma.</p><h4>3. Segurança</h4><p>Implementamos medidas de segurança padrão da indústria.</p>',
        risk_content: '<h4>1. Volatilidade</h4><p>O valor das criptomoedas pode flutuar significativamente.</p><h4>2. Irreversibilidade</h4><p>Transações na blockchain são geralmente irreversíveis. Verifique os endereços.</p><h4>3. Regulatório</h4><p>Mudanças regulatórias podem afetar o uso e valor das criptomoedas.</p>'
    },
    footer: {
        desc: 'Exchange de criptomoedas rápida, segura e privada. Sem necessidade de cadastro.',
        about_us: 'Sobre Nós', our_brand: 'Nossa Marca', support_center: 'Central de Suporte',
        terms: 'Termos de Serviço', privacy: 'Política de Privacidade', rights: 'Todos os direitos reservados.'
    },
    modal: { copy: 'Copiar', scan_qr: 'Escanear QR Code' }
}

export default pt
