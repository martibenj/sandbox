package fr.martiben.testingstuff.jeune;


import java.util.HashMap;
import java.util.Map;

public class API {

    private Map<EtatDeLaMachine, Script> liensEtatScripts;

    {
        liensEtatScripts = new HashMap<>();
        liensEtatScripts.put(EtatDeLaMachine.STARTING, new Script(EtatDeLaMachine.STARTING.name()));
        liensEtatScripts.put(EtatDeLaMachine.RUNNING, new Script(EtatDeLaMachine.RUNNING.name()));
        liensEtatScripts.put(EtatDeLaMachine.STOPPING, new Script(EtatDeLaMachine.STOPPING.name()));
    }

    public Script jouerEtat(EtatDeLaMachine pEtat) {
        Script retour = null;
        switch (pEtat) {
            case STARTING:
                // todo stuff
                retour = new Script(EtatDeLaMachine.STARTING.name());
                break;
            case RUNNING:
                // todo stuff
                retour = new Script(EtatDeLaMachine.RUNNING.name());
                break;
            case STOPPING:
                // todo stuff
                retour = new Script(EtatDeLaMachine.STOPPING.name());
                break;
        }
        return retour;
    }
}
