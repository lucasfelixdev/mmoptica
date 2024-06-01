window.revelar = ScrollReveal({
    // Reset true para animação repetir
    reset:false
  })
  
  const duracao = 500;
  
  revelar.reveal('.left', 
  {
      duration: 800,
      distance: '100px',
      origin: 'left',
      easing: 'ease-in-out',
      
  })

  revelar.reveal('.right', 
  {
      duration: 800,
      distance: '100px',
      origin: 'right',
      easing: 'ease-in',
      
  })

  revelar.reveal('.bottom', 
  {
      duration: 700,
      distance: '100px',
      origin: 'bottom',
      easing: 'ease-in',
      delay: 300,
      
  })