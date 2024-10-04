export const BrowserStub = () => {
  return (
    <div className="mt-16 mb-4 flex flex-col justify-center items-center">
      <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        На текущий момент на данной вкладке нет данных
      </h2>
      <p className="text-sm text-center text-muted-foreground">
        Попробуйте выбрать другую вкладку или добавить данные с помощью кнопки
        ниже
      </p>
    </div>
  );
};
