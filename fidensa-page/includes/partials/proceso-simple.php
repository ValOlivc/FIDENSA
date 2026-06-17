<section id="como-funciona" class="proceso" aria-labelledby="proceso-title">
    <div class="proceso__inner">
        <header class="proceso__header">
            <p class="proceso__label">PROCESO SIMPLE</p>
            <h2 id="proceso-title" class="proceso__title">¿Cómo funciona?</h2>
        </header>

        <div class="proceso__grid">
            <?php foreach ($processSteps as $step): ?>
                <article class="proceso__card">
                    <span class="proceso__number"><?= e($step['number']) ?></span>
                    <h3 class="proceso__cardTitle"><?= e($step['title']) ?></h3>
                    <p class="proceso__cardText"><?= e($step['description']) ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
