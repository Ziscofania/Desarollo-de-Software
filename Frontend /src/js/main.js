// Mostrar/ocultar servicios según selección
        const optionBtns = document.querySelectorAll('.option-btn');
        const serviceDetails = document.querySelectorAll('.service-details');
        
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos los botones y detalles
                optionBtns.forEach(b => b.classList.remove('active'));
                serviceDetails.forEach(detail => detail.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                btn.classList.add('active');
                
                // Mostrar el detalle correspondiente
                const target = btn.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            });
        });
        
        // Smooth scrolling para enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });