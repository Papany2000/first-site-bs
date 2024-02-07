const tg = window.Telegram.WebApp 

export function useTelegram() {
    const onClose = () => {
        tg.close()
      }
      // для показа и скрытия основной кнопки для взаимодействия с ботом создаём метод onToogleButton
      const onToogleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
          
        }
        console.log(tg)
      }
      return (
       {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        onToogleButton
       } 
      )
}