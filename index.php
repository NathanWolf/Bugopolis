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
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/vector.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/timer.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/keyboard.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/utility/viewport.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/stage/stage.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/brain/brain.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/brain/player.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/physical_actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/living_actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor/bug/mantis.js'); ?>"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', onReady, false);
    </script>
</head>
<body>
<canvas id="gameCanvas">

</canvas>
</body>
</html>