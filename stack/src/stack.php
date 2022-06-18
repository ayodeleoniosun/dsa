<?php

class Stack
{
    public int $count = 0;
    public array $storage = [];

    public function push(string|int $value): void
    {
        $this->storage[$this->count] = $value;
        $this->count++;
    }

    public function pop(): string|null
    {
        if ($this->count === 0) return null;

        $this->count--;
        $topElement = $this->storage[$this->count];
        array_splice($this->storage, $this->count);
        return $topElement;
    }

    public function size(): int
    {
        return $this->count;
    }

    public function peek(): string|null
    {
        if ($this->count === 0) return null;

        return $this->storage[$this->count - 1];
    }

    public function print(): string
    {
        return implode(",", $this->storage);
    }
}

$stack = new Stack();
$stack->push(1);
$stack->push(2);
$stack->push(3);
$stack->push(4);
var_dump("All elements in the stack are " . $stack->print());
var_dump("The topmost element is " . $stack->peek());
var_dump("The popped element is " . $stack->pop());
var_dump("Remaining elements are " . $stack->print());
var_dump("The size of the stack is " . $stack->size());
?>