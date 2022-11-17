/**
 * A mantis actor.
 */
class Mantis extends LivingActor {
    draw(context) {
        let location = this.getLocation();
        context.strokeStyle = 'green';
        context.beginPath();
        context.arc(location.getX(), location.getY(), 10, 0, 2 * Math.PI);
        context.stroke();
    }
}