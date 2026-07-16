if(confirm("Заполнить логин, пароль и датчик случайных чисел")) {
	setTimeout(() => {
		const logins = document.querySelectorAll('input.Input');
		const nextOne = document.querySelector('button.Action__button.Action__button_all.Action__button_login');
		
		if (logins.length > 0) {
			logins.forEach(input => { input.value = 'admin'; });
		} else { console.warn('login не найден'); }

		if (nextOne) { nextOne.click(); } else { console.warn('nextOne не найдена'); }
		
		setTimeout(() => {
			const sensor = document.querySelector('input.Input__field__input__eHAJU.Input__field__input_password__KuqrU');
			const nextTwo = document.querySelector('button.Action__button.Action__button_all.Action__button_green');

			if (sensor) { sensor.value = '0rm60ntQk_'; } else { console.warn('sensor не найден'); }
			if (nextTwo) { nextTwo.click(); } else { console.warn('nextTwo не найдена'); }
			
		}, 500)
	}, 2000);
} else { console.log('отмена') }