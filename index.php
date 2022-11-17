<?php
require_once('php/cache.inc.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bugopolis</title>
    <link rel="stylesheet" href="<?= getCacheUrl('css/common.css'); ?>" type="text/css"/>
    <script type="text/javascript" src="<?= getCacheUrl('js/main.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/vector.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/timer.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/keyboard.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/viewport.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/stage.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/brain.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/player.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/physical_actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/living_actor.js'); ?>"></script>
    <script type="text/javascript" src="<?= getCacheUrl('js/mantis.js'); ?>"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', onReady, false);
    </script>
</head>
<body>
<canvas id="gameCanvas">

</canvas>
</body>
</html>