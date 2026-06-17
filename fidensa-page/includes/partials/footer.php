<footer class="footer">
    <div class="footer__card">
        <div class="footer__left">
            <img
                src="<?= e(asset('img/LOGO-footer.png')) ?>"
                alt="FIDENSA GROUP"
                class="footer__logo"
                width="200"
                height="64"
            />

            <p class="footer__text">
                Creemos en el esfuerzo de cada persona.
                <br />
                Por eso, ofrecemos oportunidades financieras que ayudan a impulsar
                negocios,
                <br />
                proyectos y sueños.
            </p>

            <div class="footer__social-icons">
                <span class="footer__icon">in</span>
                <span class="footer__icon">f</span>
                <span class="footer__icon">ig</span>
                <span class="footer__icon">x</span>
            </div>
        </div>

        <div class="footer__columns">
            <div class="footer__column">
                <h3 class="footer__heading">COMPAÑIA</h3>
                <ul>
                    <?php foreach ($footerCompanyLinks as $item): ?>
                        <li>
                            <a href="#" class="footer__link"><?= e($item) ?></a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div class="footer__column">
                <h3 class="footer__heading">SOCIAL</h3>
                <ul>
                    <?php foreach ($footerSocialLinks as $item): ?>
                        <li>
                            <a href="#" class="footer__link"><?= e($item) ?></a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>

    <div class="footer__bottom">
        <p>
            © 2026 FIDENSA - All rights reserved - Designed and developed by
            Valyra Studio.
        </p>
    </div>
</footer>
