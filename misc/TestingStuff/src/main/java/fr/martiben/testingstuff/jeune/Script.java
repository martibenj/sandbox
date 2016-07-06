package fr.martiben.testingstuff.jeune;

/**
 * Created by Bnj on 06/07/2016.
 */
public class Script {
    private final String mEtat;

    public Script(String pEtat) {
        this.mEtat = pEtat;
    }

    @Override
    public String toString() {
        return mEtat;
    }
}
