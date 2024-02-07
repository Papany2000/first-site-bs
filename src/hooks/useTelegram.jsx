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
        user: tg.initData?.user,
        onClose,
        onToogleButton,
        showData: JSON.stringify(tg.initData),
        showDataUnSave: JSON.stringify(tg.initDataUnsafe),
       } 
      )
}