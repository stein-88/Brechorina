const schema = {
    allSteps: [
        {
            qTitle: 'A peça é de marca conhecida?',
            subTitle: 'Selecione as opções que melhor descreve a peça.',
            mainAct: 'productType',
            acts: [
                {
                    label: 'Marca conhecida',
                    refer: 'goodbranch',
                },
                {
                    label: 'Marca desconhecida',
                    refer: 'medbranch',
                },
                {
                    label: 'Sem marca',
                    refer: 'nobranch',
                },
            ],
        },
        {
            qTitle: 'Qual a média do valor pago?',
            mainAct: 'price',
            acts: [
                {
                    label: 'até 5 reais',
                    refer: 5,
                },
                {
                    label: 'até 10 reais',
                    refer: 10,
                },
                {
                    label: 'até 15 reais',
                    refer: 15,
                },
                {
                    label: '20 reais ou mais',
                    refer: 20,
                },
            ],
        },
        { // apartir daq calcular steps
            qTitle: 'Vai precisar de reparo?',
            mainAct: 'reparo',
            acts: [
                {
                    label: 'Sim',
                    refer: 'yes',
                },
                {
                    label: 'Não',
                    refer: 'no',
                },
            ],
        },
        {
            qTitle: 'Que tipo de reparo?', // melhorar logica em relacao ao processo de reparo pode ser que precise de mais de um tipi de reparo fazer uma aferiçao maior em relacao a isso. se possivel repetir etapa 
            mainAct: 'repairtype',
            acts: [
                {
                    label: 'Costura',
                    refer: 'costura',
                },
                {
                    label: 'Colar',
                    refer: 'glue',
                },
                {
                    label: 'Tingimento',
                    refer: 'ink',
                },
                {
                    label: 'Retirar bolinha',
                    refer: 'retirarbolinha',
                },
                {
                    label: 'Retirar pelo',
                    refer: 'retirarpelo',
                },
                {
                    label: 'Caneta corretiva',
                    refer: 'caneta',
                },
            ],
        },
        {
            qTitle: 'Qual o tamanho do reparo?',
            mainAct: 'repairSize', // costura e bolinha
            acts: [
                {
                    label: 'Grande',
                    refer: 'big',
                },
                {
                    label: 'Médio',
                    refer: 'medium',
                },
                {
                    label: 'Pequeno',
                    refer: 'small',
                },
            ],
        },
        {
            qTitle: 'Quantos tubetes?',
            mainAct: 'repairTingimentoSize',
            acts: [
                {
                    label: '1',
                    refer: 'one',
                },
                {
                    label: '2',
                    refer: 'two',
                },
                {
                    label: '3 ou mais',
                    refer: 'threeOrMore',
                },
            ],
        },
        {
            qTitle: 'Quantos rolos para retirar pelo?',
            mainAct: 'repairPelo',
            acts: [
                {
                    label: '1',
                    refer: 'oneTube',
                },
                {
                    label: '2 +',
                    refer: 'twoplus',
                },
            ],
        },
        {
            qTitle: 'Teve mais de um procedimento de reparo?',
            mainAct: 'repairAgain',
            acts: [
                {
                    label: 'Sim',
                    refer: 'yes',
                },
                {
                    label: 'Não',
                    refer: 'no',
                },
            ],
        },
        {
            qTitle: 'Qual procedimento de higiênização foi usado?',
            mainAct: 'clean',
            acts: [
                {
                    label: 'Peça foi lavada na máquina.',
                    refer: 'machine',
                },
                {
                    label: 'Peça foi lavada a seco.',
                    refer: 'dryclean',
                },
            ],
        },
        {
            qTitle: 'Cuidados especiais',
            mainAct: 'specialCare', // é possivel que eu tenha que revisar essa situacao e criar mais camadas conforme a carina vai me dando feedback no uso do dia a dia.
            acts: [
                {
                    label: 'Peça contém mancha.',
                    refer: 'dirtink',
                },
                {
                    label: 'Peça deve ser passada a ferro.',
                    refer: 'ferro',
                },
                {
                    label: 'Peça deve secar a sombra.',
                    refer: 'dryShadow',
                },
            ],
        },
        {
            qTitle: 'Teve mais algum processo de higienização?',
            mainAct: 'repeatCare', // é possivel que eu tenha que revisar essa situacao e criar mais camadas conforme a carina vai me dando feedback no uso do dia a dia.
            acts: [
                {
                    label: 'Sim',
                    refer: 'yes',
                },
                {
                    label: 'Não',
                    refer: 'no',
                },
            ],
        },
    ],
    chmpSch: {
        qTitle: 'O preço minimo sugerido é:',
    },
}

export default schema
