<!DOCTYPE html>
<html>
  <head>
    <title>
      Матвійчук І.А., група ІТ-72, лабораторна робота №7, варіант №10
    </title>
    <meta charset="UTF-8" />
    <meta name="keywords" content="HTML, FrontEnd, lab7" />
    <meta
      name="description"
      content="Лабораторна робота студентки ІТ-72 Матвійчук І.А. на тему 'JavaScript. Форми'. Варіант №10."
    />
  </head>
  <body>
    <?php
        $product = $_POST["product"];
        $material = $_POST["material"];
        $itemsCount = $_POST["itemsCount"];
        echo "Ваше замовлення прийнято\nЗамовлено виріб - $product \nМатеріал - $material\nКількість - $itemsCount"
    ?>
    <p>
      <a href="./orderFurniture.html">Повернення</a>
    </p>
  </body>
</html>
