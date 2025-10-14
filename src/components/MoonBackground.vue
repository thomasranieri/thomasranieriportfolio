<template>
    <canvas class="moon-background"></canvas>
</template>
<script>

export default {
    data() {
        return {
            moons: [],
            canvas: null,
            ctx: null,
            mouseX: null,
            mouseY: null,
            hasMouse: false,
            mouseHandler: null,
            rafId: null,
            moonSpacing: 200
        };
    },
    mounted() {
        this.canvas = this.$el;
        this.ctx = this.canvas.getContext('2d');
        // bind drawMoons so we can reference the same function when cancelling
        this.drawMoons = this.drawMoons.bind(this);
        this.rafId = requestAnimationFrame(this.drawMoons);

        this.createMoons();
        this.onResize();

        window.addEventListener('resize', this.onResize);
        if (window.matchMedia("(hover: hover)").matches) {
            this.hasMouse = true;
            // store a reference so we can remove it in beforeUnmount
            this.mouseHandler = (event) => {
                this.mouseX = event.clientX + window.scrollX;
                this.mouseY = event.clientY + window.scrollY;
            };
            window.addEventListener('mousemove', this.mouseHandler);
        }
    },
    beforeUnmount() {
        // cancel the animation frame and remove listeners to avoid leaks
        if (this.rafId != null) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
        window.removeEventListener('resize', this.onResize);
        if (this.mouseHandler) {
            window.removeEventListener('mousemove', this.mouseHandler);
            this.mouseHandler = null;
        }
    },
    methods: {
        onResize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            // Set a minimum spacing, but make it scale with screen size
            this.moonSpacing = Math.max(140, window.innerWidth / 10);
            this.createMoons();
        },
        createMoons() {
            this.moons = [];
            var startY = 0;
            var xCount = Math.ceil(this.canvas.width / this.moonSpacing);
            var overallWidth = this.moonSpacing * xCount;
            var startX = (this.canvas.width - overallWidth) / 2;
            // stagger every other column
            for (var x = startX; x / this.moonSpacing < xCount; x += this.moonSpacing) {
                startY = (startY + this.moonSpacing / 2) % this.moonSpacing;
                for (var y = startY; y < this.canvas.height; y += this.moonSpacing) {
                    this.moons.push({ x, y });
                }
            }
        },
        drawMoons() {
            var time = (new Date()).getTime();
            const MOON_DIAMETER = 80;
            const canvas = this.$el;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);



            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                time = 0;
                this.mouseX = null;
                this.mouseY = null;
            }


            // allow 0 coordinate values (use nullish coalescing)
            var focusX = (this.mouseX ?? canvas.width / 2);
            var focusY = (this.mouseY ?? canvas.height / 2);

            this.moons.forEach(moon => {
                var moonPhase = 0;
                moonPhase = 0.5;
                var distanceToFocus = Math.sqrt(Math.pow(moon.x - focusX, 2) + Math.pow(moon.y - focusY, 2));
                moonPhase += distanceToFocus / 1000;
                moonPhase = moonPhase % 1;
                moonPhase += 0.25; // full moon


                // animate the moons if there's no mouse
                if (!this.hasMouse) {
                    moonPhase += time / 1000 / 8;
                }

                var quarter = Math.floor(moonPhase * 4) % 4;
                var quarterProgress = moonPhase * 4 - Math.floor(moonPhase * 4);

                // guard against zero which would cause divisions by zero later
                var epsilon = 1e-6;
                if (quarterProgress < epsilon) quarterProgress = epsilon;

                var gibbous = quarter > 1;
                var flipped = quarter % 2 === 1;

                if (flipped) {
                    quarterProgress = 1 - quarterProgress;
                }

                var darkCircleRadius = MOON_DIAMETER / 2 * 1 / quarterProgress;

                var linearMovingArcPoint = MOON_DIAMETER / 2 * quarterProgress;
                darkCircleRadius = (Math.pow(MOON_DIAMETER / 2, 2) + Math.pow(linearMovingArcPoint, 2)) / (2 * linearMovingArcPoint);

                ctx.beginPath();
                if (flipped ^ gibbous) {
                    ctx.arc(moon.x, moon.y, MOON_DIAMETER / 2, -Math.PI / 2, Math.PI / 2, true);
                } else {
                    ctx.arc(moon.x, moon.y, MOON_DIAMETER / 2, -Math.PI / 2, Math.PI / 2);
                }

                // semi-transparent pale white moon
                ctx.fillStyle = '#eeeeee22';

                var xOffset = - darkCircleRadius + quarterProgress * MOON_DIAMETER;
                xOffset = -Math.sqrt(Math.pow(darkCircleRadius, 2) - Math.pow(MOON_DIAMETER / 2, 2));

                var startAngle = Math.atan2(MOON_DIAMETER / 2, -xOffset);
                var endAngle = -startAngle;

                if (flipped) {
                    xOffset = -xOffset;
                    startAngle = Math.PI - startAngle;
                    endAngle = Math.PI - endAngle;
                }

                ctx.arc(moon.x + xOffset, moon.y, darkCircleRadius, startAngle, endAngle, !flipped);
                ctx.lineWidth = 2;
                ctx.fill();
            });
            requestAnimationFrame(this.drawMoons);
        }
    },
}
</script>
<style>
.moon-background {
    position: absolute;
    inset: 0;
    background: #0077b5;
    z-index: -1;
}
</style>