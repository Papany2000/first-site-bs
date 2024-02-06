const tg = window.Telegram.WebApp 

export function useTelegram() {
    const onClose = () => {
        tg.close()
      }
      const onToogleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
        
      }
      return (
        tg,
        tg.initDataUnsafe?.user,
        onClose,
        onToogleButton
      )
}