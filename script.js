let nome =  document.querySelector('input#nome');
        let email = document.querySelector('input#email');
        let idade = document.querySelector('input#idade');

        function enviar()
        {
            if(nome.value == '')
            {
                alert(`[ERROR]: Preencha o campo nome!`)
            }else if(email.value == '')
            {
                alert(`[ERROR]: Prencha o campo Email!`)
            }else if(idade.value == '' || idade.value == 0)
            {
                alert(`[ERROR]: O campo idade não pode ser zero ou não preenchido!`)
            }else
            {
                alert(`Informações Enviadas com SUCESSO!`)
            }
           nome.value = ''
           email.value = ''
           idade.value = ''
           nome.focus();
        }    
    
    