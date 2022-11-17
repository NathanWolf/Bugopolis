<?php
require_once('php/cache.inc.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bugopolis</title>
    <link rel="stylesheet" href="<?= getCacheUrl('css/common.css'); ?>" type="text/css"/>
    <script type="text/javascript" src="<?= getCacheUrl('js/bugopolis/main.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/Vector.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/Timer.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/Keyboard.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/Viewport.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/world/World.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/Entity.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/brain/Brain.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/brain/Player.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/PhysicalEntity.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/LivingEntity.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/entity/bug/Mantis.js'); ?>"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', onReady, false);
    </script>
</head>
<body>
<canvas id="gameCanvas">

</canvas>
</body>
</html>