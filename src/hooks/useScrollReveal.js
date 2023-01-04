import ScrollReveal from 'scrollreveal';

function useScrollReveal() {
    /*=============== SCROLL REVEAL ANIMATION ===============*/ 

    const sr = ScrollReveal({
      origin: 'top',
      distance: '600px',
      duration: 2500,
      delay: 400,
    })

  return (
    sr
  )
}

export default useScrollReveal
