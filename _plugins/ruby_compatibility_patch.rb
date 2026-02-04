if RUBY_VERSION >= '3.2'
  [Object, NilClass, String, Array, Hash].each do |klass|
    klass.class_eval do
      def tainted?
        false
      end

      def untaint
        self
      end

      def taint
        self
      end
    end
  end
end
