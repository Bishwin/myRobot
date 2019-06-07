'use strict';
const X_AXIS = 0;
const Y_AXIS = 1;

class Hoover {

    constructor(input) {
        this.roomSize = input.roomSize;
        this.coords = input.coords;
        this.patches = input.patches;
        this.instructions = input.instructions.split('');

        this.cleanedPatches = 0;
    }

    run() {
        this.instructions.forEach((direction) => {
            if (direction === 'N' && this.inBounds(this.coords[Y_AXIS], 'N')) {
                this.coords[Y_AXIS] += 1;
                if (this.isDirty(this.coords)) {
                    this.cleanPatch(this.coords);
                }
            } else if (direction === 'E' && this.inBounds(this.coords[X_AXIS], 'E')) {
                this.coords[X_AXIS] += 1;
                if (this.isDirty(this.coords)) {
                    this.cleanPatch(this.coords);
                }
            } else if (direction === 'S' && this.inBounds(this.coords[Y_AXIS], 'S')) {
                this.coords[Y_AXIS] -= 1;
                if (this.isDirty(this.coords)) {
                    this.cleanPatch(this.coords);
                }
            } else if (direction === 'W' && this.inBounds(this.coords[X_AXIS], 'W')) {
                this.coords[X_AXIS] -= 1;
                if (this.isDirty(this.coords)) {
                    this.cleanPatch(this.coords);
                }
            }
        });

        return {
            coords: this.coords,
            patches: this.cleanedPatches
        };
    }

    inBounds(position, direction) {
        if (direction === 'S' || direction === 'W') {
            return position - 1 >= 0;
        } else {
            return position + 1 <= 5;
        }
    }

    isDirty(coords) {
        let result = false;
        this.patches.forEach((element) => {
            if (JSON.stringify(element) === JSON.stringify(coords)) {
                result = true;
            }
        });
        return result;
    }

    cleanPatch(coords) {
        this.patches = this.patches
            .filter((value) => JSON.stringify(value) !== JSON.stringify(coords));
        this.cleanedPatches++;
    }
}

module.exports = Hoover;

