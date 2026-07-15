public class SingletonPattern {
    private static volatile SingletonPattern obj;

    private SingletonPattern() {}

    public static SingletonPattern getInstance() {
        if (obj == null) {
            synchronized (SingletonPattern.class) {
                if (obj == null) {
                    obj = new SingletonPattern();
                }
            }
        }
        return obj;
    }

    public static void main(String[] args) {
        SingletonPattern l1 = SingletonPattern.getInstance();
        SingletonPattern l2 = SingletonPattern.getInstance();

        System.out.println(l1 == l2);
    }
}