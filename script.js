        let nome =  document.querySelector('input#nome');
        let email = document.querySelector('input#email');
        let idade = document.querySelector('input#idade');
        let saida = document.querySelector('div#saida');

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
                saida.innerHTML += `<p>O nome informado foi <strong>${nome.value}</strong>.</p>`;
                saida.innerHTML += `<p>O seu E-mail é: <strong>${email.value}</strong>.</p>`;
                saida.innerHTML += `<p>você tem <strong>${idade.value}</strong> anos de idade.</p>`;
            }

            
            
            nome.value = '';
            email.value = '';
            idade.value = '';
            nome.focus();
           
        }
    

    