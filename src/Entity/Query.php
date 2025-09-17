<?php

namespace App\Entity;

use App\Repository\QueryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QueryRepository::class)]
class Query
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $queryId = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQueryId(): ?int
    {
        return $this->queryId;
    }

    public function setQueryId(int $queryId): static
    {
        $this->queryId = $queryId;

        return $this;
    }
}
