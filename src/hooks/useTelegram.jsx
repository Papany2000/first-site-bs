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
        user: tg.initDataUnsafe?.user?.['first_name'] + ' ' + tg.initDataUnsafe?.user?.['last_name'],
        onClose,
        onToogleButton,
        showData: JSON.stringify(tg.initDataUnsafe?.user),
        showDataUnSave: JSON.stringify(tg.initDataUnsafe?.user?.['last_name']),
       } 
      )
}