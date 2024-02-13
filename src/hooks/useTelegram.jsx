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
      }
      return (
       {
        tg,
        user: tg.initDataUnsafe?.user?.['first_name'],
        onClose,
        onToogleButton,
        queryId: tg.initDataUnsafe?.query_Id
       } 
      )
}